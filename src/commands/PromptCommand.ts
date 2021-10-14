import * as vscode from 'vscode';

import { openWikiFile } from '../backend/OpenFile';

export function promptCommand(): void {
    let o: vscode.InputBoxOptions = {};
    o.prompt = 'Approximate file name';
    let returnValue = vscode.window.showInputBox(o);
    returnValue.then(value => {
        if (!(value === undefined)) {
            console.log('promptCommand: queried file name:', value);
            openWikiFile(value);
        }
    }, () => {
        console.error('promptCommand: the promise should not be rejected.');
    });
}