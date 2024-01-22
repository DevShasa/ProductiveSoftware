import { faker } from "@faker-js/faker"

function fakedata(){
    console.log("Generating")
    const bannerImage = faker.image.urlLoremFlickr({width:480, height:640, category:"abstract"})
    const midBanner = faker.image.urlLoremFlickr({width:480, height:640, category:"nature"})
    const nature = [
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"nature"}),
    ]
    const paris = [
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"paris"}),
    ]
    const rio = [
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
        faker.image.urlLoremFlickr({width:480, height:640, category:"rio"}),
    ]

    return {midBanner, bannerImage, nature, rio, paris}
}

export {fakedata}