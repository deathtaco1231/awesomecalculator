import * as actionsGithub from '@actions/github';

const githubToken = actionsCore.getInput('token');

const artifacts = (await actionsGithub.getOctokit(githubToken).rest.actions.listArtifactsForRepo({
    owner: actionsGithub.context.repo.owner,
    repo: actionsGithub.context.repo.repo,
    name: 'manifest'
  })).data.artifacts;