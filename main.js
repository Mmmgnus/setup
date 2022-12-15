import { execa } from 'execa';
import Listr from 'listr';

const tasks = new Listr([
	{
		title: 'Install apps',
		task: () => {
			return new Listr([
				{
					title: 'Visual Studio Code',
					task: () => execa('brew', ['install', '--cask', 'visual-studio-code']).then(result => {
						//console.log('result', result)
					})
				},
				{
					title: 'Warp',
					task: () => execa('brew', ['install', '--cask', 'warp']).then(result => {
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
					title: 'Slack',
					task: () => execa('brew', ['install', '--cask', 'slack']).then(result => {
						// console.log('result', result)
					})
				},
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
				{
					title: 'Dropbox',
					task: () => execa('brew', ['install', '--cask', 'dropbox']).then(result => {
						// console.log('result', result)
					})
				},
				{
					title: 'Docker',
					enabled: () => false,
					task: () => execa('brew', ['install', '--cask', 'docker']).then(result => {
						// console.log('result', result)
					})
				},
			], {concurrent: true});
		}
	},
]);

tasks.run().catch(err => {
	console.error(err);
});