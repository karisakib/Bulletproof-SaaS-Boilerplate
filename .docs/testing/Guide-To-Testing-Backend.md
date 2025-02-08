# Guide To Testing The Backend


If short on time, prefer integration tests over unit tests because it covers logical workflows ands business logic

Unit test the business logic which is under your control.


Follow the Arrange-Act-Assert pattern in testing.

```javascript
describe('User Service', () => {
  it('Should create a user given correct data', async () => {
    // 1. Arrange - prepare the data, create any objects you need
    const mockUser = {
      // ...
    }
    const userService = createUserService(
      mockLogger,
      mockQueryBuilder
    )

    // 2. Act - execute the logic that you're testing
    const result = userService.create(mockUser)

    // 3. Assert - validate the expected result
    expect(mockLogger).toHaveBeenCalled()
    expect(mockQueryBuilder).toHaveBeenCalled()
    expect(result).toEqual(/** ... */)
  })
})
```

* Use Artillery for stress testing
* Create test users to test permissions
* Create test users to test authentication
* Create test users to test api resources
* Give test user names and personalities