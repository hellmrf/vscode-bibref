import { defineExtension, useCommand } from 'reactive-vscode'
import * as vscode from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  vscode.window.showInformationMessage('Hello')

  useCommand('bibref.hello', () => {
    vscode.window.showInformationMessage('Hello World!')
  })
})

export { activate, deactivate }
