import * as core from '@actions/core'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    core.setOutput('time', new Date().toTimeString() + 'clock')
    throw `Waiting ${ms} milliseconds`
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.debug('Error occurred in action')
    if (error instanceof Error) core.setFailed(error.message)
  }
}
