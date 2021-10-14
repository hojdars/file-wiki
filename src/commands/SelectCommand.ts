import { assert } from 'console';
import * as vscode from 'vscode';

import { openWikiFile } from '../backend/OpenFile';

export function selectCommand(): void {
    let activeEditor = vscode.window.activeTextEditor;
    if (activeEditor === undefined) {
        console.error('selectCommand: active editor should always be defined');
        return;
    }

    let selection = activeEditor.selection;
    assert(selection !== undefined);
    let activeText = activeEditor.document.getText(selection);
    console.debug('selectCommand: selected text is:', activeText);

    openWikiFile(activeText);
}