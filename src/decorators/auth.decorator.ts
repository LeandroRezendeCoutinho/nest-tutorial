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
    throw new Error('Function not implemented.')
}
function ApiUnauthorizedResponse(arg0: { description: string }): ClassDecorator | MethodDecorator | PropertyDecorator {
    throw new Error('Function not implemented.')
}

class Role {    
}