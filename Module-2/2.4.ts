interface Developer<T, X=undefined> {
    name: string,
    device: {
        brand: string,
        model: string,
        release: number,
    },
    smartWatch: T,
    bike?: X,
}

type EmilateWatch = {
    brand: string,
    model: string,
    display: string,
}

const poorDeveloper: Developer<EmilateWatch> = {
    name: 'hriodoy',
    device: {
        brand: 'asus',
        model: 'x-2554',
        release: 2021,
    },
    smartWatch: {
        brand: 'turbo',
        model: 'kjheh3',
        display: 'amulate',
    }
}

interface AppleWatch {
    brand: string,
    model: string,
    heartTrack: boolean,
    sleepTrack: boolean,
}

interface YamahaBike {
    model: string,
    engineCapacity: string,
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rich Dev',
    device: {
        brand: 'hp',
        model: 'x-2554ds',
        release: 2020,
    },
    smartWatch: {
        brand: 'apple',
        model: 'sdfsd',
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        model: 'Yamaha',
        engineCapacity: '1000cc'
    }
}
