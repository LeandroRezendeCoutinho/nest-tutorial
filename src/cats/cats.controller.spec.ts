import { Test, TestingModule } from '@nestjs/testing'
import { CommonService } from '../common/common.service'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

describe('CatsController', () => {
  let catsController: CatsController
  let catsService: CatsService

  beforeEach(async () => {
    catsService = new CatsService(new CommonService(catsService))
    catsController = new CatsController(catsService)
  })

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [new Cat()]
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result)

      expect(await catsController.findAll(false, 0)).toBe(result)
    })
  })
})
