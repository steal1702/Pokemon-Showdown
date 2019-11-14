'use strict'

exports.commands = {
	play(target, room, user) {
		if(!this.runBroadcast()) return;
		if(!target) return this.parse("/help songs");
	},
	
	songshelp: [
		`/play [artist-name] - Plays a random song of the artist you entered`,
		`/play [song-name] - Plays the song you entered (The first search result)`,
		`/play [song-name], [artist-name] - Plays the song of the artist you entered`,
	],
};
