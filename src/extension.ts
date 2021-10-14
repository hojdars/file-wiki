import * as vscode from 'vscode';

import { promptCommand } from './commands/PromptCommand';
import { selectCommand } from './commands/SelectCommand';

export function activate(context: vscode.ExtensionContext) {
	let disposablePromptCommand = vscode.commands.registerCommand('file-wiki.promptCommand', promptCommand);
	let disposableSelectCommand = vscode.commands.registerCommand('file-wiki.selectCommand', selectCommand);

	context.subscriptions.push(disposablePromptCommand);
	context.subscriptions.push(disposableSelectCommand);
}

export function deactivate() { }
