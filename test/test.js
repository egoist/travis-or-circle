import test from 'ava'
import toc from '../'

test('travis', t => {
	const v = toc('./travis')
	t.same(v, ['5', '4'])
})

test('circle', t => {
	const v = toc('./circle')
	t.same(v, ['0.12', '4', '5'])
})

test('cwd', t => {
	const v = toc()
	t.same(v, ['0.12', '4', '5'])
})

test('nothing', t => {
	const v = toc('../../')
	t.notOk(v)
})
