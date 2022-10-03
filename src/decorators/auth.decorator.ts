import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '../guards/auth.guard'
import { RolesGuard } from '../guards/roles.guard'

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  )
}

function ApiBearerAuth(): ClassDecorator | MethodDecorator | PropertyDecorator {
    return (...args) => { return args}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ApiUnauthorizedResponse(arg0: { description: string }): ClassDecorator | MethodDecorator | PropertyDecorator {
    return (...args) => { return args}
}

class Role {    
}