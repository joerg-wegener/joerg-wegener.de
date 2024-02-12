import redis from 'async-redis'
import { strict as assert } from 'node:assert'
import { after, before, describe, it } from 'node:test'
import { GenericContainer } from 'testcontainers'

describe('Starting Website', () => {
  let container
  let redisClient

  before(async () => {
    container = await new GenericContainer('redis')
      .withExposedPorts(6379)
      .start()

    redisClient = redis.createClient(
      container.getMappedPort(6379),
      container.getHost(),
    )
  })

  after(async () => {
    await redisClient.quit()
    await container.stop()
  })

  it('workds)', async () => {
    await redisClient.set('key', 'val')
    const result = await redisClient.get('key')
    assert.strictEqual(result, 'val')
  })
})
