export class Training {
    constructor(
        public id: number|string,
        public distance: number,
        public date: string,
        public workoutType: string,
        public comment: string
    ) {}
}