import { assert } from 'console';
import * as vscode from 'vscode';

export function openWikiFile(name: string): void {
    if (name.length === 0) {
        vscode.window.showErrorMessage('The name of the file cannot be empty.');
        return;
    }

    let config = vscode.workspace.getConfiguration('file-wiki');
    let wikiLocation: string | undefined = config.get('wikiFolderLocation');

    let validConfig = wikiLocation?.length && (wikiLocation?.length > 0);
    if (!validConfig) {
        vscode.window.showErrorMessage('The "wikiFolderLocation" setting is not configured, please configure it first.');
        return;
    }

    let textPath = wikiLocation + '/' + name + '.txt';
    console.log('openWikiFile: got=', textPath);

    let path = vscode.Uri.parse(textPath);
    vscode.workspace.openTextDocument(path).then(document => {
        vscode.window.showTextDocument(document);
    }, () => {
        console.error('openWikiFile: Cannot open the file=', textPath, ". Perhaps create it first?");
        vscode.window.showErrorMessage('Cannot open the file. Perhaps create it first?', textPath);
    });
}