import {link} from '../env'

function uparam(attr, val, andPre= true){
    if(!val) return ""
    return `${andPre ? '&':''}${attr}=${val}`
}

export async function fetchStates(){
    let states = await fetch(link('states')).then(res => res.json())
    let listStates = []
    for(let k in states){
        listStates.push({label: states[k], value: k})
    }
    return listStates
}

export function getAgentUrlParams(filter){
    return uparam('home_type',filter.home_type||'House', false)+
    uparam('filter_by',filter.filter_by)+
    uparam('city',filter.city)+
    uparam('address',filter.street_address||filter.address)+
    uparam('state',filter.state)+
    uparam('agent_name',filter.agent_name)+
    uparam('page',filter.page)
}

export async function fetchAgents(filter){
    let url = link(
        `reports/${filter.state||'CA'}?`+
        getAgentUrlParams(filter)
    )
        
    let res = await fetch(url).then(res => res.json())
    return res
}

export async function agentDetails(name){
    return await fetch(link('agents/'+name)).then(res => res.json())
}

export async function agentScores(name, duration=36){
    return await fetch(link(`agent_scores/${name}/?time_duration=${duration}`)).then(res => res.json())
}

export async function submitLead(data){
    return await fetch(link('lead/'), {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(data)
    }).then(res => res.json())
}
