import { Cite } from '@citation-js/core'
import { logger } from './utils'

import '@citation-js/plugin-csl'
import '@citation-js/plugin-bibtex'
import '@citation-js/plugin-doi'
import '@citation-js/plugin-isbn'
import '@citation-js/plugin-pubmed'
import '@citation-js/plugin-software-formats'
import '@citation-js/plugin-wikidata'

export default async function getBiblatexFromId(id: str): string {
  logger.info(`\n\ngetBiblatexFromId('${id}') called.`)

  const cites = await Cite.async(id)

  logger.info(`\n\ngetBiblatexFromId('${id}') found ${cites.data.length} reference(s).`)

  if (cites.data.length === 0) {
    logger.error(`\n\ngetBiblatexFromId('${id}') found no references.`)
    return ''
  }
  else {
    for (const data of cites.data) {
      logger.info(`\nReference Found:`)
      logger.info(`    | id: ${data.id}`)
      logger.info(`    | type: ${data.type}`)
      logger.info(`    | title: ${data.title}`)
      // logger.info(JSON.stringify(cites.data))
    }
  }

  const output = cites.format('biblatex')
  logger.info('\n\n% BibLaTeX:')
  logger.info(output)
  return output
}
