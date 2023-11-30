// STRETCH

const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'camry',
        mileage: 500000,
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '2222222222222',
        make: 'toyota',
        model: 'trundra',
        mileage: 300000,
        title: 'clean',

    },
    {
        vin: '3333333333333',
        make: 'ford',
        model: 'ranger',
        mileage: 456100,
    }
]

exports.seed = function (knex) {
    return knex('cars').truncate().then(() => {
        return knex('cars').insert(cars)
    })
}