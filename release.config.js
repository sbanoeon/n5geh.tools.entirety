module.exports =
    {
        //"dryRun": true,
        "debug": true,
        "plugins": [
            [
                "@semantic-release/commit-analyzer",
                {
                    "preset": "angular",
                    "parserOpts": {
                        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
                    }
                }
            ],
            [
                "@semantic-release/release-notes-generator",
                {
                    "preset": "angular",
                    "parserOpts": {
                        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
                    },
                     "presetConfig": {
                        types: [
                            {type: "feat", section: "Featuressss", hidden: false},
                            {type: "fix", section: "Bug Fixes", hidden: false},
                            {type: "docs", section: "Documentationsss", hidden: false},
                            {type: "chore", section: "Miscellaneous Chores", hidden: false},
                        ],
                    },
                    "writerOpts": {
                        "groupBy": "scope",
                        "commitsSort": ["subject", "scope"]
                    }
                }
            ],
            [
                "@semantic-release/github",
                {
                    "assets": [],
                    "addReleases": true
                }
            ],
            "@semantic-release/git"
        ]
    }

// {
//     "plugins": [
//         [
//             "@semantic-release/commit-analyzer",
//             {
//                 "preset": "conventionalcommits",
//                 "parserOpts": {
//                     "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
//                 }
//             }
//         ],
//         [
//             "@semantic-release/release-notes-generator",
//             {
//                 "preset": "conventionalcommits",
//                 "parserOpts": {
//                     "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
//                 },
//                 "presetConfig": {
//                     types: [
//                         {type: "feat", section: "Featuressss", hidden: false},
//                         {type: "fix", section: "Bug Fixes", hidden: false},
//                         {type: "docs", section: "Miscellaneous Chores", hidden: false},
//                         {type: "chore", section: "Miscellaneous Chores", hidden: false},
//                     ],
//                 },
//                 // "writerOpts": {
//                 //     "groupBy": "scope",
//                 //     "linkReferences": "False",
//                 // "commitsSort": ["subject", "sco
//             }
//         ]
//     ]
// }