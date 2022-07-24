import { Resolver, ResolveProperty, Parent } from "@nestjs/graphql";
import { User } from "src/users/dto/users.entity";
import { IUser } from "src/users/interfaces/user.interface";
import { UsersService } from "src/users/users.service";
import { Reservation } from "./dto/reservation.entity";
import { IReservation } from "./interfaces/reservation.interface";

@Resolver(of => Reservation)
export class ReservationsPropertyResolver {
    constructor(private readonly userService: UsersService) {}

    @ResolveProperty(returns => User)
    client(
        @Parent() reservation: IReservation
    ): Promise<IUser> {
        return this.userService.findOneById(reservation.client);
    }
}