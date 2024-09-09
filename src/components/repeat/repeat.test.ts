import { updateFieldIdInExpression } from './helpers';

describe('RepeatingFieldComponent - handleExpressionFieldIdUpdate', () => {
  it('Should handle update of expression with ids in repeat group', () => {
    const expression =
      "infantStatus !== '151849AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' && infantStatus !== '154223AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'";
    const fieldIds = ['birthDate', 'infantStatus', 'deathDate'];
    const index = 2;

    const updatedExpression = updateFieldIdInExpression(expression, index, fieldIds);

    expect(updatedExpression).toEqual(
      "infantStatus_2 !== '151849AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' && infantStatus_2 !== '154223AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'",
    );
  });

  it('Should handle update of expression with ids not in repeat group', () => {
    const expression =
      "myValue > today() || myValue <= '1/1/1890' || myValue > useFieldValue('visit_date') || myValue < useFieldValue('visit_date')";
    const fieldIds = ['birthDate', 'infantStatus', 'deathDate'];
    const index = 1;

    const updatedExpression = updateFieldIdInExpression(expression, index, fieldIds);

    expect(updatedExpression).toEqual(
      "myValue > today() || myValue <= '1/1/1890' || myValue > useFieldValue('visit_date') || myValue < useFieldValue('visit_date')",
    );
  });

  it('Should update field ID in expressions when adding repeated fields', () => {
    const expression = "infantStatus !== 'someValue'";
    const fieldIds = ['birthDate', 'infantStatus', 'deathDate'];
    const updatedExpression = updateFieldIdInExpression(expression, 2, fieldIds);

    expect(updatedExpression).toEqual("infantStatus_2 !== 'someValue'");
  });
});
