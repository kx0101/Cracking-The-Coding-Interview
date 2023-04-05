class Animal {
    public name: string;
    public type: string;
    public arrivalType: number;

    constructor(name: string, type: string, arrivalType: number) {
        this.name = name;
        this.type = type;
        this.arrivalType = arrivalType;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getArrivalTime(): number {
        return this.arrivalType;
    }
}

class AnimalShelter {
    public dogs: LinkedList<Animal> = new LinkedList<Animal>();
    public cats: LinkedList<Animal> = new LinkedList<Animal>();
    public time = 0;

    public enqueue(animal: Animal): void {
        if (animal.getType() === "dog") {
            this.dogs.addLast(animal);
        } else if (animal.getType() === "cat") {
            this.cats.addLast(animal);
        }

        this.time++;
    }

    public dequeue(): Animal | undefined {
        if (this.dogs.isEmpty() && this.cats.isEmpty()) {
            return undefined;
        }

        if (this.cats.isEmpty()) {
            return this.dogs.removeFirst();
        }

        if (this.dogs.isEmpty()) {
            return this.cats.removeFirst();
        }

        if (this.dogs.getArrivalTime() < this.cats.getArrivalTime()) {
            return this.dogs.removeFirst();
        }

        return this.cats.removeFirst();
    }

    public dequeueDog(): Animal | undefined {
        if (this.dogs.isEmpty()) {
            return undefined;
        }

        return this.dogs.removeFirst();
    }

    public dequeueCat(): Animal | undefined {
        if (this.cats.isEmpty()) {
            return undefined;
        }

        return this.cats.removeFirst();
    }
}
