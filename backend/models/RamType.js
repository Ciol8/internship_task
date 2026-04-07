module.exports = (sequlize, DataTypes) => {

    const RamType = sequlize.define("RamType", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    RamType.associate = (models) => {
        RamType.hasMany(models.Rams)
    }

    return RamType;
}