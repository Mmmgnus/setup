import { execa } from 'execa';
import Listr from 'listr';

const tasks = new Listr([
	{
		title: 'Install development apps',
		task: () => {
			return new Listr([
				{
					title: 'Visual Studio Code',
					task: () => execa('brew', ['install', '--cask', 'visual-studio-code']).then(result => {
						//console.log('result', result)
					})
				},
				
				{
					title: 'Docker',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'docker']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: 'Postman',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'postman']).then(result => {
						// console.log('result', result)
					})
				},
				
			])
		}
	},

	{
		title: 'Install productivity apps',
		task: () => {
			return new Listr([
				{
					title: 'Obsidian',
					task: () => execa('brew', ['install', '--cask', 'obsidian']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: 'Alfred',
					task: () => execa('brew', ['install', '--cask', 'alfred']).then(result => {
						// console.log('result', result)
					})
				},
			])
		}
	},

	{
		title: 'Install browsers',
		task: () => {
			return new Listr([
				{
					title: 'Firefox',
					task: () => execa('brew', ['install', '--cask', 'firefox']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: 'Google Chrome',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'google-chrome']).then(result => {
						// console.log('result', result)
					})
				},
			])
		}
	},

	{
		title: 'Install communication',
		task: () => {
			return new Listr([
				{
					title: 'Slack',
					task: () => execa('brew', ['install', '--cask', 'slack']).then(result => {
						// console.log('result', result)
					})
				},
			])
		}
	},

	{
		title: 'Install multimedia',
		task: () => {
			return new Listr([
				{
					title: 'Spotify',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'spotify']).then(result => {
						// console.log('result', result)
					})
				},
			])
		}
	},
	
	{
		title: 'Install utilities',
		task: () => {
			return new Listr([
				{
					title: 'Warp',
					task: () => execa('brew', ['install', '--cask', 'warp']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: 'Dash',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'dash']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: '1 Password',
					task: () => execa('brew', ['install', '--cask', '1password']).then(result => {
						// console.log('result', result)
					})
				},
				
				{
					title: 'Dropbox',
					task: () => execa('brew', ['install', '--cask', 'dropbox']).then(result => {
						// console.log('result', result)
					})
				},
			], {concurrent: true});
		}
	},
]);

export function install () {
	tasks.run().catch(err => {
		console.error(err);
	});
}