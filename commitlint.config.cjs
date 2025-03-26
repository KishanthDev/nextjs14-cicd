module.exports = {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always', /^[A-Z].*/],
    'header-end-period': [2, 'always', /\.$/],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw.trim()), // Added .trim() to avoid issues with leading spaces
            'Commit message must start with a capital letter',
          ];
        },
        'header-end-period': ({ header }) => {
          return [/\.$/.test(header), 'Commit message must end with a period'];
        },
      },
    },
  ],
};
