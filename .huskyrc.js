module.exports = {
  hooks: {
    'pre-push': 'yarn test && yarn build',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};