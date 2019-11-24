class MessageException {

    static NOT_FOUND = "NOT_FOUND";
    static NAME_FARM_EXIST = "NAME_FARM_EXIST";
    static NAME_BATCH_EXIST = "NAME_BATCH_EXIST";
    static EMAIL_PEOPLE_EXIST = "EMAIL_PEOPLE_EXIST";
    static ANIMAL_ASSOCIATE_BATCH = "ANIMAL_ASSOCIATE_BATCH";

    static PARAM_DYNAMIC_MESSAGE = ":param";

    static messages = {
        "NAME_FARM_EXIST": "Outra fazenda está usando esse nome!",
        "NOT_FOUND": ":param não encontrado!",
        "EMAIL_PEOPLE_EXIST": "Esse email já está sendo usado!",
        "NAME_BATCH_EXIST": "A outro lote com esse nome!",
        "ANIMAL_ASSOCIATE_BATCH": "O animal não pode ser deletado, pois está associado a um lote!"
    }

    static getByCode(code, param = null) {
        const message = MessageException.messages[code] || "";
        if (param) {
            return message.replace(MessageException.PARAM_DYNAMIC_MESSAGE, param);
        }

        return message;
    }
}

module.exports = MessageException;