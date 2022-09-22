import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable, tap } from "rxjs"

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        console.log('Before...')
     
        const now = this.now('micro')
        return next
            .handle()
            .pipe(
                tap(() => console.log(`After... ${this.now('micro') -  now}us`)
                )
            )
    }    

     now = (unit) => {  
        const hrTime = process.hrtime()        
        switch (unit) {
          
          case 'milli':
            return hrTime[0] * 1000 + hrTime[1] / 1000000
            
          case 'micro':
            return hrTime[0] * 1000000 + hrTime[1] / 1000
            
          case 'nano':
          default:
            return hrTime[0] * 1000000000 + hrTime[1]
        }        
      }
}