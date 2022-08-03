const mongoose = require('mongoose')
const Project = require('../models/Project')

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGOprojects_URI || 'mongodb://localhost/mernauth'
)

const projectSeed = [
    {
        title: 'Project1',
        songs: [
            {
                songTitle: 'Song Title 1',
                songArrangements: ['guitar', 'piano', 'drum'],
                songStatus: {
                    guitar: 'Incomplete',
                    piano: 'Incomplete',
                    drum: 'Complete',
                },
                songKey: 'Fm',
                songBpm: 150,
                song_notes: [
                    {
                        noteTitle: 'Song Title 1-1 - guitar',
                        noteBody: 'note for song 1 guitar',
                        noteStatus: 'Incomplete',
                    },
                    {
                        noteTitle: 'Song Title 1-1 - piano',
                        noteBody: 'note for song 1 piano',
                        noteStatus: 'Incomplete',
                    },
                    {
                        noteTitle: 'Song Title 1-1 - drum',
                        noteBody: 'note for song 1 drum',
                        noteStatus: 'Complete',
                    },
                ],
            },
            {
                songTitle: 'Song Title 1-2 Piano Solo',
                songArrangements: ['piano'],
                songStatus: { piano: 'Complete' },
                songKey: 'Am',
                songBpm: 110,
                song_notes: [
                    {
                        noteTitle: 'Song Title 1-2 - piano',
                        noteBody: 'note for song 1-2 piano solo',
                        noteStatus: 'Complete',
                    },
                ],
            },
        ],
        members: ['things 1', 'hegner123@gmail.com'],
        total_arrangements: 3,
        companyName: 'ABC',
    },
    {
        title: 'Project2',
        songs: [
            {
                songTitle: 'Song Title 2-1',
                songArrangements: [
                    'guitar1',
                    'orchestra',
                    'drum',
                    'guitar2',
                    'guitar3',
                ],
                songKey: 'Bm',
                songBpm: 120,
                song_notes: [
                    {
                        noteTitle: 'Song Title 2-1 - guitar1',
                        noteBody: "there's no note 2-1",
                        noteStatus: 'Complete',
                    },
                    {
                        noteTitle: 'Song Title 2-1 orchestra ',
                        noteBody: '2-1 orchestra note',
                        noteStatus: 'Complete',
                    },
                    {
                        noteTitle: 'Song Title 2-1 drum ',
                        noteBody: '2-1 drum note',
                        noteStatus: 'Incomplete',
                    },
                    {
                        noteTitle: 'Song Title 2-1 guitar2 ',
                        noteBody: '2-1 guitar2 note',
                        noteStatus: 'Complete',
                    },
                    {
                        noteTitle: 'Song Title 2-1 guitar3',
                        noteBody: '2-1 guitar3 note',
                        noteStatus: 'Complete',
                    },
                ],
            },
            {
                songTitle: 'Song Title 2-2',
                songArrangements: ['drum', 'orchestra', 'trumpet'],
                songKey: 'Am',
                songBpm: 90,
                song_notes: [
                    {
                        noteTitle: 'Song Title 2-2 - drum',
                        noteBody: ']note 2-2 drum',
                        noteStatus: 'Incomplete',
                    },
                    {
                        noteTitle: 'Song Title 2-2 - orchestra',
                        noteBody: 'note 2-2 orchestra',
                        noteStatus: 'Incomplete',
                    },
                    {
                        noteTitle: 'Song Title 2-2 - trumpet',
                        noteBody: "there's no note 2-2 trumpet",
                        noteStatus: 'Incomplete',
                    },
                ],
            },
        ],
        members: ['member 1', 'member 2'],
        total_arrangements: 6,
        companyName: 'Verizon',
    },
    {
        title: 'Project3',
        songs: [
            {
                songTitle: 'Song Title 3-1',
                songArrangements: ['guitar', 'piano', 'drum'],
                songKey: 'Fm',
                songBpm: 150,
                song_notes: [{ notes: "there's no note" }],
            },
        ],
        members: ['thing 3-1', 'thing 3-2'],
        total_arrangements: 3,
        companyName: 'Netflix',
    },
    {
        title: 'Project4',
        songs: [
            {
                songTitle: 'Song Title 4-1',
                songArrangements: ['guitar', 'piano', 'drum'],
                songKey: 'Am',
                songBpm: 150,
                song_notes: [{ notes: "there's no note" }],
            },
        ],
        members: ['thing 3-1', 'thing 3-2'],
        total_arrangements: 3,
        companyName: 'Netflix',
    },
    {
        title: 'Project5',
        songs: [
            {
                songTitle: 'Magic Mountain',
                songArrangements: ['bass1', 'drum', 'guitar1', 'guitar2'],
                songKey: 'G',
                songBpm: 80,
                song_notes: [
                    {
                        notes: "there's no note",
                    },
                ],
                songStatus: {
                    bass1: 'Complete',
                    drum: 'Complete',
                    guitar1: 'Complete',
                    guitar2: 'Complete',
                },
            },
            {
                songTitle: 'Rainbow',
                songArrangements: [
                    'bass1',
                    'bgv',
                    'drum',
                    'guitar1',
                    'guitar2',
                    'vocals',
                ],
                songKey: 'G',
                songBpm: 80,
                song_notes: [
                    {
                        notes: "there's no note",
                    },
                ],
                songStatus: {
                    bass1: 'Complete',
                    bgv: 'Incomplete',
                    drum: 'Complete',
                    guitar1: 'Complete',
                    guitar2: 'Incomplete',
                    vocals: 'Incomplete',
                },
            },
            {
                songTitle: 'No Hardcore Dancing In The Living Room',
                songArrangements: [
                    'drum',
                    'guitar1',
                    'guitar2',
                    'guitar3',
                    'orchestra',
                ],
                songKey: 'Bm',
                songBpm: 120,
                song_notes: 'no notes',
                songStatus: {
                    drum: 'Complete',
                    guitar1: 'Complete',
                    guitar2: 'Complete',
                    guitar3: 'Incomplete',
                    orchestra: 'Complete',
                },
            },
            {
                songTitle: 'Song Title 2-2',
                songArrangements: ['drum', 'orchestra', 'trumpet'],
                songKey: 'Am',
                songBpm: 90,
                song_notes: 'no notes',
                songStatus: {
                    drum: 'Complete',
                    trumpet: 'Incomplete',
                    orchestra: 'Complete',
                },
            },
        ],
        members: ['thing 5-1', 'thing 5-2'],
        total_arrangements: 6,
        companyName: 'Netflix',
    },
]
Project.remove({})
    .then(() => Project.insertMany(projectSeed))
    .then((data) => {
        console.log(data + ' records inserted!')
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
