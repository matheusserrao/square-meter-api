import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewMeterDTO {
    
    @ApiProperty({
        example: '1181.41',
        description: 'Value created in database'
    })
    @IsNumber()
    @IsPositive()
    value: number;

}