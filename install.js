import { execa } from 'execa';
import Listr from 'listr';

const tasks = new Listr([
	{
		title: 'Install development apps',
		task: () => {
			return new Listr([
				{
					title: 'Visual Studio Code',
					task: () => execa('brew', ['install', '--cask', 'visual-studio-code'])
				},
				
				{
					title: 'Docker',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'docker'])
				},
				{
					title: 'Postman',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'postman'])
				},
				{
					title: 'Github CLI',
					enabled: () => false,
					task: () => execa('brew', ['install', 'gh'])
				},
				
			], {concurrent: true})
		}
	},

	{
		title: 'Install productivity apps',
		task: () => {
			return new Listr([
				{
					title: 'Obsidian',
					task: () => execa('brew', ['install', '--cask', 'obsidian'])
				},
				{
					title: 'Alfred',
					task: () => execa('brew', ['install', '--cask', 'alfred'])
				},
			], {concurrent: true})
		}
	},

	{
		title: 'Install browsers',
		task: () => {
			return new Listr([
				{
					title: 'Firefox',
					task: () => execa('brew', ['install', '--cask', 'firefox'])
				},
				{
					title: 'Google Chrome',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'google-chrome'])
				},
			], {concurrent: true})
		}
	},

	{
		title: 'Install communication',
		task: () => {
			return new Listr([
				{
					title: 'Slack',
					task: () => execa('brew', ['install', '--cask', 'slack'])
				},
			], {concurrent: true})
		}
	},

	{
		title: 'Install multimedia',
		task: () => {
			return new Listr([
				{
					title: 'Spotify',
					task: () => execa('brew', ['install', '--cask', 'spotify'])
				},
			], {concurrent: true})
		}
	},
	
	{
		title: 'Install utilities',
		task: () => {
			return new Listr([
				{
					title: 'Warp',
					task: () => execa('brew', ['install', '--cask', 'warp'])
				},
				{
					title: 'Dash',
					task: () => execa('brew', ['install', '--cask', 'dash'])
				},
				{
					title: '1 Password',
					task: () => execa('brew', ['install', '--cask', '1password'])
				},
				
				{
					title: 'Dropbox',
					task: () => execa('brew', ['install', '--cask', 'dropbox'])
				},
			], {concurrent: true});
		}
	},

	{
		title: 'Install VS Code Extensions',
		task: () => {
			return new Listr([
				{
					title: 'Atom Keymap',
					task: () => execa('code', ['--install-extension', 'ms-vscode.atom-keybindings'])
				},
				{
					title: 'Theme: Copilot Theme',
					task: () => execa('code', ['--install-extension', 'benjaminbenais.copilot-theme'])
				},
				{
					title: 'Github Copilot',
					task: () => execa('code', ['--install-extension', 'github.copilot'])
				},
				{
					title: 'Styled-jsx',
					task: () => execa('code', ['--install-extension', 'blanu.vscode-styled-jsx'])
				},
				{
					title: 'TODO Highlight v2',
					task: () => execa('code', ['--install-extension', 'jgclark.vscode-todo-highlight'])
				},
				{
					title: 'EditorConfig for VS Code',
					task: () => execa('code', ['--install-extension', 'editorconfig.editorconfig'])
				},
				{
					title: 'ESLint',
					task: () => execa('code', ['--install-extension', 'dbaeumer.vscode-eslint'])
				},
				{
					title: 'File Utils',
					task: () => execa('code', ['--install-extension', 'sleistner.vscode-fileutils'])
				},
				{
					title: 'GitLens',
					task: () => execa('code', ['--install-extension', 'eamodio.gitlens'])
				},
				{
					title: 'Live Share',
					task: () => execa('code', ['--install-extension', 'ms-vsliveshare.vsliveshare'])
				},
				{
					title: 'Prettier',
					task: () => execa('code', ['--install-extension', 'esbenp.prettier-vscode'])
				},
			])
		}
	},
]);

export function install () {
	tasks.run().catch(err => {
		console.error(err);
	});
}