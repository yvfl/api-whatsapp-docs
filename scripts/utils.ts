import fs from "fs/promises";
import path from "path";

/**
 * Extrai a URL do comentário <!-- Source: URL --> no início do arquivo
 */
export function extractUrlFromFile(content: string): string | null {
  const match = content.match(/<!-- Source: (.+) -->/);
  return match ? match[1].trim() : null;
}

/**
 * Extrai a data "Updated: ..." do conteúdo do arquivo
 * Formato esperado: "Updated: 3 de nov de 2025"
 */
export function extractUpdatedDate(content: string): Date | null {
  // Procurar por padrões de data "Updated: ..."
  const patterns = [
    /Updated:\s*(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})/i, // "Updated: 3 de nov de 2025"
    /Updated:\s*(\w+)\s+(\d{1,2}),\s+(\d{4})/i, // "Updated: Nov 3, 2025"
    /Updated:\s*(\d{4})-(\d{2})-(\d{2})/i, // "Updated: 2025-11-03"
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      try {
        // Tentar parsear a data
        if (pattern === patterns[0]) {
          // Formato brasileiro: "3 de nov de 2025"
          const day = parseInt(match[1]);
          const monthName = match[2].toLowerCase();
          const year = parseInt(match[3]);

          const monthMap: Record<string, number> = {
            janeiro: 0,
            fevereiro: 1,
            março: 2,
            marco: 2,
            abril: 3,
            maio: 4,
            junho: 5,
            julho: 6,
            agosto: 7,
            setembro: 8,
            outubro: 9,
            novembro: 10,
            dezembro: 11,
            jan: 0,
            fev: 1,
            mar: 2,
            abr: 3,
            mai: 4,
            jun: 5,
            jul: 6,
            ago: 7,
            set: 8,
            out: 9,
            nov: 10,
            dez: 11,
          };

          const month = monthMap[monthName];
          if (month !== undefined) {
            return new Date(year, month, day);
          }
        } else if (pattern === patterns[1]) {
          // Formato inglês: "Nov 3, 2025"
          return new Date(match[0].replace("Updated:", "").trim());
        } else if (pattern === patterns[2]) {
          // Formato ISO: "2025-11-03"
          return new Date(match[0].replace("Updated:", "").trim());
        }
      } catch (e) {
        // Continuar para o próximo padrão
        continue;
      }
    }
  }

  return null;
}

/**
 * Converte URL para caminho de arquivo relativo esperado
 * Baseado na estrutura de pastas existente
 */
export function urlToFilePath(url: string): string {
  // Detectar padrão /docs/whatsapp/* ou /documentation/business-messaging/whatsapp/*
  let pathPart: string;
  
  // Padrão /docs/whatsapp/*
  const docsMatch = url.match(/\/docs\/whatsapp\/(.+)$/);
  if (docsMatch) {
    pathPart = docsMatch[1];
  } else {
    // Padrão /documentation/business-messaging/whatsapp/*
    const docMatch = url.match(/\/whatsapp\/(.+)$/);
    if (!docMatch) return "unknown.md";
    pathPart = docMatch[1];
  }

  // Mapear segmentos da URL para estrutura de pastas
  // Exemplo: /messages/text-messages -> mensagens/tipos_de_mensagens/text_messages.md
  const segments = pathPart.split("/").filter(Boolean);

  // Mapeamento de segmentos comuns
  const segmentMap: Record<string, string> = {
    messages: "mensagens",
    "marketing-messages": "mensagens_de_marketing",
    templates: "modelos",
    webhooks: "webhooks",
    "business-phone-numbers": "ativos_da_conta/telefones_comerciais",
    "whatsapp-business-accounts": "ativos_da_conta/outros_ativos",
    catalogs: "catalogos",
    payments: "pagamentos",
    calling: "ligacoes",
    groups: "grupos",
    "solution-providers": "parceiros",
    "embedded-signup": "parceiros/integracao_de_clientes/cadastro_incorporado",
    reference: "referencia",
    pricing: "recado/precos",
    "about-the-platform": "recado/sobre_a_plataforma",
    support: "suporte",
    analytics: "insights",
    ctwa: "anuncios_com_clique_para_whatsapp",
    "get-started": "comecar",
    // Mapeamentos para /docs/whatsapp/*
    flows: "flows",
  };

  // Mapeamento específico para subpastas de flows
  const flowsSubMap: Record<string, string> = {
    reference: "referencia",
    guides: "guias",
    "getting-started": "comecar",
    changelogs: "changelog",
    playground: "playground",
  };

  const mappedSegments: string[] = [];
  const isFlowsPath = url.includes("/docs/whatsapp/");

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    // Se for o primeiro segmento e tiver mapeamento, usar
    if (i === 0 && segmentMap[segment]) {
      mappedSegments.push(segmentMap[segment]);
      continue;
    }

    // Mapeamentos específicos para subpastas de flows
    if (isFlowsPath && i === 1 && flowsSubMap[segment]) {
      mappedSegments.push(flowsSubMap[segment]);
      continue;
    }

    // Mapeamentos específicos para subpastas
    if (segment === "messages" && mappedSegments[mappedSegments.length - 1] === "mensagens") {
      mappedSegments.push("tipos_de_mensagens");
      continue;
    }

    if (segment === "reference" && mappedSegments.length === 0) {
      mappedSegments.push("referencia");
      continue;
    }

    // Converter hífens para underscores e adicionar
    mappedSegments.push(segment.replace(/-/g, "_"));
  }

  // Se não há extensão, adicionar .md
  const lastSegment = mappedSegments[mappedSegments.length - 1];
  if (!lastSegment.endsWith(".md")) {
    mappedSegments[mappedSegments.length - 1] = lastSegment + ".md";
  }

  return mappedSegments.join("/");
}

/**
 * Encontra o arquivo correspondente a uma URL usando o índice
 */
export function findFileForUrl(
  url: string,
  index: { urlToFile: Record<string, string> }
): string | null {
  return index.urlToFile[url] || null;
}

/**
 * Carrega o conteúdo de um arquivo markdown
 */
export async function loadMarkdownFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, "utf-8");
}

/**
 * Encontra todos os arquivos .md recursivamente em um diretório
 * Ignora arquivos AGENTS.md
 */
export async function findAllMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await findAllMarkdownFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      // Ignorar arquivos AGENTS.md
      if (entry.name !== "AGENTS.md") {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/**
 * Extrai a data "Updated" de uma página HTML usando Puppeteer
 */
export async function extractUpdatedDateFromPage(
  page: any // Puppeteer Page type
): Promise<Date | null> {
  try {
    const updatedText = await page.evaluate(() => {
      // Procurar por texto que contenha "Updated:"
      const bodyText = document.body.textContent || "";
      const match = bodyText.match(/Updated:\s*([^\n]+)/i);
      return match ? match[1].trim() : null;
    });

    if (!updatedText) return null;

    // Tentar parsear a data
    // Formato comum: "3 de nov de 2025"
    const dateMatch = updatedText.match(/(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})/i);
    if (dateMatch) {
      const day = parseInt(dateMatch[1]);
      const monthName = dateMatch[2].toLowerCase();
      const year = parseInt(dateMatch[3]);

      const monthMap: Record<string, number> = {
        janeiro: 0,
        fevereiro: 1,
        março: 2,
        marco: 2,
        abril: 3,
        maio: 4,
        junho: 5,
        julho: 6,
        agosto: 7,
        setembro: 8,
        outubro: 9,
        novembro: 10,
        dezembro: 11,
        jan: 0,
        fev: 1,
        mar: 2,
        abr: 3,
        mai: 4,
        jun: 5,
        jul: 6,
        ago: 7,
        set: 8,
        out: 9,
        nov: 10,
        dez: 11,
      };

      const month = monthMap[monthName];
      if (month !== undefined) {
        return new Date(year, month, day);
      }
    }

    // Tentar parsear como Date padrão
    const parsedDate = new Date(updatedText);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }

    return null;
  } catch (error) {
    return null;
  }
}

