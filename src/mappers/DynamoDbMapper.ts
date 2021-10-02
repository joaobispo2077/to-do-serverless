type ConvertOptions = {
  pk: string;
  sk: string;
};

class DynamoDbMapper {
  static converToDynamo<T>(
    data: T,
    options: ConvertOptions,
  ): T & ConvertOptions {
    const converted = Object.assign(
      {},
      {
        pk: data[options.pk],
        sk: data[options.sk],
        ...data,
      },
    );

    delete converted[options.pk];
    delete converted[options.sk];

    return converted;
  }

  static converToEntity<T>(
    data: T & ConvertOptions,
    options: ConvertOptions,
  ): Omit<T, 'pk' | 'sk'> {
    const converted = Object.assign(
      {},
      {
        [options.pk]: data.pk,
        [options.sk]: data.sk,
        ...data,
      },
    );

    delete converted.pk;
    delete converted.sk;

    return converted;
  }
}

export { DynamoDbMapper };
