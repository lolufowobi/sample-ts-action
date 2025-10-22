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
    // throw new Error(`Waiting ${ms} milliseconds`)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.debug('core debug load in catch block')
    console.log('console logging caught error', error)
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      console.error('console error logging non-error thrown in catch block')
      core.debug('core debug lod in non-error catch block')
    }
  }
}
