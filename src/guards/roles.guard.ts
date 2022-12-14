import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { Observable } from "rxjs"


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.getAllAndMerge<string[]>('roles',
            [context.getHandler(), context.getClass()])

        if (!roles) {
            return true
        }

        const request = context.switchToHttp().getRequest()
        const user = request.user
        return this.matchRoles(roles, user.roles)
    }

    private matchRoles(roles: string[], userRoles: string[]): boolean {
        userRoles.forEach(role => {
            if (roles.includes(role))
                return true
        })

        return false
    }
}
