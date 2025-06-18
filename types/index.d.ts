declare module '@citation-js/core' {
  interface CiteOptions {
    format?: string
    template?: string
    lang?: string
  }

  interface CSLDate {
    'date-parts': number[][]
    'literal'?: string
    'raw'?: string
  }

  interface CSLName {
    family: string
    given?: string
    literal?: string
    suffix?: string
    commaSuffix?: boolean
    droppingParticle?: string
    nonDroppingParticle?: string
    staticOrdering?: boolean
    multi?: {
      family: { en: string, [key: string]: string }
      given?: { en: string, [key: string]: string }
    }
  }

  type CSLItemType
    = | 'article' // Generic article
      | 'article-journal' // Journal article
      | 'article-magazine' // Magazine article
      | 'article-newspaper' // Newspaper article
      | 'book' // Book
      | 'chapter' // Book chapter
      | 'entry' // Dictionary or encyclopedia entry
      | 'entry-dictionary' // Dictionary entry
      | 'entry-encyclopedia' // Encyclopedia entry
      | 'manuscript' // Manuscript
      | 'paper-conference' // Conference paper
      | 'patent' // Patent
      | 'report' // Report
      | 'thesis' // Thesis
      | 'webpage' // Webpage
      | 'bill' // Bill
      | 'case' // Legal case
      | 'graphic' // Graphic
      | 'interview' // Interview
      | 'legislation' // Legislation
      | 'motion_picture' // Motion picture (film)
      | 'song' // Song
      | 'speech' // Speech
      | 'map' // Map
      | 'broadcast' // Broadcast (e.g., TV show, podcast)
      | 'personal_communication' // Personal communication
      | 'software' // Software
      | 'dataset' // Dataset
      | 'figure' // Figure
      | 'post' // Post (e.g., blog post)
      | 'document' // Generic document
      | 'other' // Other types not covered above

  interface CSLJSON {
    abstract?: string
    accessed?: CSLDate
    archive?: string
    archiveLocation?: string
    author?: CSLName[]
    chapterNumber?: string
    citationLabel?: string
    citationNumber?: number
    collectionEditor?: CSLName[]
    collectionTitle?: string
    containerTitle?: string
    DOI?: string
    edition?: string
    editor?: CSLName[]
    event?: string
    eventPlace?: string
    genre?: string
    id?: string | number
    ISBN?: string
    ISSN?: string
    issue?: string
    issued?: CSLDate
    jurisdiction?: string
    keyword?: string
    language?: string
    medium?: string
    note?: string
    number?: string
    numberOfVolumes?: string
    originalDate?: CSLDate
    originalPublisher?: string
    originalPublisherPlace?: string
    originalTitle?: string
    page?: string
    publisher?: string
    publisherPlace?: string
    references?: string
    reviewedAuthor?: CSLName[]
    reviewedTitle?: string
    section?: string
    shortTitle?: string
    source?: string
    status?: string
    submitted?: CSLDate
    title?: string
    translator?: CSLName[]
    type: CSLItemType
    URL?: string
    version?: string
    volume?: string
  }

  export class Cite {
    static async(data: string | CSLJSON | Array<string | CSLJSON>): Promise<Cite>

    constructor(data: string | CSLJSON | Array<string | CSLJSON>)

    data: CSLJSON[]

    format(format: string, options?: CiteOptions): string
  }
}
