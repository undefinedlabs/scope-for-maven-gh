import * as core from '@actions/core'
import * as executor from './executor'
import * as exec from "@actions/exec";

async function run() {
    try {
        let scopeAgentVersion = core.getInput("agentVersion", {required: false}) || undefined;
        let apikey = core.getInput("apikey", {required: true})

        console.log(scopeAgentVersion);

        await executor.instrument(scopeAgentVersion);
        exec.exec("cat pom.xml")

    } catch (error) {
        core.setFailed(error.message)
    }
}

run();