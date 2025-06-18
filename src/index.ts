import { defineExtension, useCommands } from 'reactive-vscode'
import * as vscode from 'vscode'
// import getBiblatexFromId from './gets'
import { fetchBibFromId } from './commands'

import { logger } from './utils'

// const example_doi = '10.5281/zenodo.1005176' // Willighagen et. al. 2018
// const example_doi2 = '10.1021/jm4004285' // Cherkasov et. al. 2014

const { activate, deactivate } = defineExtension(() => {
  logger.info('vscode-bibref activated!')

  useCommands({
    'bibref.fetchDOI': fetchBibFromId,
  })
})

export { activate, deactivate }
