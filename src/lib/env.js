const API_URL = "https://app.agentstat.com/"

export function link(uri, prefix='api'){
    return API_URL+prefix+'/'+uri
}