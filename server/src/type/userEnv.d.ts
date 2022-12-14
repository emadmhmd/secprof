type UserEnv = {
    ip: string,
    user_agent: string,
    platform: string,
    os: string,
}

export interface UserEnvIn extends UserEnv {
    type?: string,
    continent_name?: string,
    continent_code?: string,
    country_name?: string,
    country_code?: string,
    region_name?: string,
    region_code?: string,
    city?: string,
    zip?: number,

}
