module.exports = {
    sections: [
        {
            name: 'Read Me',
            content: 'src/Readme.md'
        },
        {
            name: 'UI Components',
            sections: [
                {
                name: 'Button',
                content: 'src/js/UIComponents/Readme.md',
                components: 'src/js/UIComponents/**/*.js'
                }
            ]
        }
    ]
};