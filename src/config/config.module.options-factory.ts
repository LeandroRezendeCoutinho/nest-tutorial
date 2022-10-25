import { ConfigModuleOptions } from "./interfaces/config-module-options.interface"


export class ConfigModuleOptionsFactory {
    createConfigOptions() {
        const options: ConfigModuleOptions = { folder: './config'}
        return options
    }
}