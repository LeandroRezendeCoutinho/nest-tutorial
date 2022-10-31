import { Injectable, Scope } from '@nestjs/common'
import { CreateCatDto } from './dto'
import { Cat } from './interfaces/cat.interface'

@Injectable({scope: Scope.REQUEST, durable: true})
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: CreateCatDto) {
    const newCat = new Cat()
    Object.assign(newCat, cat)
    this.cats.push(newCat)
  }

  findAll(): Cat[] {
    return this.cats
  }

  find(id: number): Cat {
    return this.cats.find(x => x.id === id)
  }
}