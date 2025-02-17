const { sequelize } = require('../config/sequelize');
const User = require('../entities/users.entity')(sequelize);
const UpdateBalanceDTO = require('../dtos/updateBalance.dto');

const updateBalance = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    UpdateBalanceDTO.validate({ userId, amount });
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }

  try {
    const result = await sequelize.transaction(async (transaction) => {
      const user = await User.findByPk(userId, { transaction });
      if (!user) return { status: 404, error: 'Пользователь не найден' };
      if (user.balance + amount < 0) return { status: 400, error: 'Баланс не может быть отрицательным' };

      user.balance += amount;
      await user.save({ transaction });
      return { status: 200, message: 'Баланс обновлен', newBalance: user.balance };
    });

    res.status(result.status).json(result.error ? { error: result.error } : { message: result.message, newBalance: result.newBalance });
  } catch ({ message }) {
    res.status(400).json({ error: message });
  }
};

module.exports = { updateBalance };
