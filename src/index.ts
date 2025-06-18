import { defineExtension, useCommands } from 'reactive-vscode'
import * as vscode from 'vscode'
import getBiblatexFromId from './gets'

import { logger } from './utils'

// const example_doi = '10.5281/zenodo.1005176' // Willighagen et. al. 2018
// const example_doi2 = '10.1021/jm4004285' // Cherkasov et. al. 2014

const { activate, deactivate } = defineExtension(() => {
  logger.info('vscode-bibref activated!')

  useCommands({
    'bibref.hello': () => {
      vscode.window.showInformationMessage('Hello World!')
    },
    'bibref.fetchDOI': async () => {
      const id = await vscode.window.showInputBox({ prompt: 'Enter a DOI, PMID, ISBN, Github URL, npm URL, ...' })
      if (!id)
        return

      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `BibRef`,
        cancellable: false,
      }, (progress, _token) => {
        progress.report({ message: `Fetching BibLaTeX for ${id}` })
        const bib = getBiblatexFromId(id)
        return bib.then((bib) => {
          vscode.window.showInformationMessage(bib, { title: 'Copy', isCloseAffordance: false }).then((selection) => {
            if (selection && selection.title === 'Copy') {
              vscode.env.clipboard.writeText(bib)
              vscode.window.showInformationMessage('Citation copied to clipboard!')
            }
          })
        })
      })
    },
  })
})

export { activate, deactivate }
