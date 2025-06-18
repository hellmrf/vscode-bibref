import * as vscode from 'vscode'
import { getBiblatexFromId } from './gets'

export async function fetchBibFromId() {
  const prompt = `Enter a DOI, PMID, ISBN, Github URL, npm URL, or other identifier to fetch BibLaTeX citation.`
  const id = await vscode.window.showInputBox({ prompt })

  if (!id)
    return

  const progressOptions: vscode.ProgressOptions = {
    location: vscode.ProgressLocation.Notification,
    title: `BibRef`,
    cancellable: false,
  }
  vscode.window.withProgress(progressOptions, async (progress, _token) => {
    progress.report({ message: `Fetching BibLaTeX for ${id}` })
    const bib = await getBiblatexFromId(id)
    const selection = await vscode.window.showInformationMessage(bib, { title: 'Copy', isCloseAffordance: false })
    if (selection && selection.title === 'Copy') {
      vscode.env.clipboard.writeText(bib)
      vscode.window.showInformationMessage('Citation copied to clipboard!')
    }
  })
}
