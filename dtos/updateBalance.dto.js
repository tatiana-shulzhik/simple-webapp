class UpdateBalanceDTO {
    constructor(userId, amount) {
        this.userId = userId;
        this.amount = amount;
    }

    static validate(data) {
        const errors = [];

        if (typeof data.userId !== 'number') {
            errors.push('userId должно быть числом');
        }

        if (typeof data.amount !== 'number') {
            errors.push('amount должно быть числом');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
    }
}

module.exports = UpdateBalanceDTO;
