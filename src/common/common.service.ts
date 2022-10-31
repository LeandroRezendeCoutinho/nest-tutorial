import { forwardRef, Inject } from "@nestjs/common"
import { CatsService } from "../cats/cats.service"

export class CommonService {
    constructor(
        @Inject(forwardRef(() => CatsService))
        private catsService: CatsService
    ) { }
}