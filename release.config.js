module.exports = {
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
                "writerOpts": {
                    "groupBy": "scope"
                    // "commitsSort": ["subject", "scope"]
                }
            }
        ]
    ]
};